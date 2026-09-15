declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const trackPixelEvent = (
  event: string,
  params?: Record<string, any>
) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (params) {
        window.fbq('track', event, params);
      } else {
        window.fbq('track', event);
      }
    }
  } catch (error) {
    console.error('Meta Pixel tracking error:', error);
  }
};
