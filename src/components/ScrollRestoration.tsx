import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Helper to get navigation stack
const getStack = (): string[] => {
  try {
    const data = sessionStorage.getItem('nav-history-stack');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

// Helper to set navigation stack
const setStack = (stack: string[]) => {
  try {
    sessionStorage.setItem('nav-history-stack', JSON.stringify(stack));
  } catch (e) {}
};

// Intelligent helper to determine back/restore navigation
function isBackNav(from: string, to: string, navigationType: string, historyStack: string[]): boolean {
  if (navigationType === 'POP') return true;

  const toIndex = historyStack.indexOf(to);
  const fromIndex = historyStack.indexOf(from);
  
  // If target path is in history stack before current path, it's back navigation
  if (toIndex !== -1 && (fromIndex === -1 || toIndex < fromIndex)) {
    return true;
  }

  // Exact UI-level hierarchies or back button navigations
  if (from.startsWith('/project/') && to === '/portfolio') return true;
  if (from === '/anchor-house' && to === '/portfolio') return true;
  if (from === '/aa-wealth' && to === '/portfolio') return true;
  if (from === '/portfolio' && to === '/') return true;
  if ((from === '/cp-house-review' || from === '/aa-wealth-review' || from === '/parth-shah-review' || from === '/js-house-review' || from === '/anchor-house' || from === '/shela-house-review' || from === '/jd-office-review') && (to === '/' || to === '/testimonials')) return true;
  if (to === '/testimonials' && from !== '/testimonials') return true;
  
  // Generic: any other page returning back to home page is treated as back
  if (to === '/' && from !== '/') return true;

  return false;
}

export function ScrollRestoration() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const lastPath = useRef(pathname);
  const isRestoring = useRef(false);

  // Initialize stack if empty
  useEffect(() => {
    const stack = getStack();
    if (stack.length === 0) {
      setStack([pathname]);
    }
  }, []);

  // Synchronous route transition detection
  if (lastPath.current !== pathname) {
    const fromPath = lastPath.current;
    const toPath = pathname;
    
    const stack = getStack();
    const isBack = isBackNav(fromPath, toPath, navigationType, stack);
    
    if (isBack) {
      // It's a back navigation, so keep or set isRestoring to true if we have scroll memory
      const saved = sessionStorage.getItem(`scroll-pos-${toPath}`);
      if (saved && parseInt(saved, 10) > 0) {
        isRestoring.current = true;
      }
      // Update history stack
      const toIndex = stack.indexOf(toPath);
      if (toIndex !== -1) {
        setStack(stack.slice(0, toIndex + 1));
      } else {
        setStack([toPath]);
      }
    } else {
      // Forward navigation
      isRestoring.current = false;
      // Push to history stack
      stack.push(toPath);
      setStack(stack);
    }
    
    lastPath.current = pathname;
  }

  // Handle saving scroll position
  useEffect(() => {
    // Save scroll on scroll events
    const handleScroll = () => {
      if (isRestoring.current) return;
      
      const currentScroll = window.scrollY;
      sessionStorage.setItem(`scroll-pos-${pathname}`, currentScroll.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Save initial scroll position if there is none
    if (!sessionStorage.getItem(`scroll-pos-${pathname}`)) {
      sessionStorage.setItem(`scroll-pos-${pathname}`, window.scrollY.toString());
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // Handle restoring or resetting scroll position
  useEffect(() => {
    const savedPos = sessionStorage.getItem(`scroll-pos-${pathname}`);
    
    // Determine whether we should restore
    const isBack = navigationType === 'POP' || isRestoring.current;

    if (isBack && savedPos) {
      const scrollY = parseInt(savedPos, 10);
      
      if (scrollY <= 0) {
        window.scrollTo(0, 0);
        isRestoring.current = false;
        return;
      }

      // Restore scroll over progressive attempts to account for dynamic layout renders
      const attempts = [0, 25, 75, 150, 300, 500, 750, 1000];
      const timers = attempts.map((delay, index) => 
        setTimeout(() => {
          // Double check document height and apply restore
          const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const targetY = Math.min(scrollY, maxScrollHeight > 0 ? maxScrollHeight : scrollY);
          
          window.scrollTo({
            top: targetY,
            behavior: 'auto'
          });

          // If we reached the final attempt, reset the restoring lock
          if (index === attempts.length - 1) {
            isRestoring.current = false;
          }
        }, delay)
      );
      
      return () => {
        timers.forEach(clearTimeout);
      };
    } else {
      // Forward navigation or fresh start: scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
      isRestoring.current = false;
    }
  }, [pathname, navigationType]);

  return null;
}
