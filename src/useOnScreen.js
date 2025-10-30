// src/hooks/useOnScreen.js

import { useState, useEffect, useRef } from 'react';

/**
 * Hook para detectar si un elemento está visible en la pantalla.
 * @param {object} options - Opciones del Intersection Observer (rootMargin, threshold).
 * @returns {[object, boolean]} [ref, isIntersecting]
 */
export default function useOnScreen(options) {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Si no hay ref, sal de la función.
    if (!ref.current) return; 

    // Crea el observador
    const observer = new IntersectionObserver(([entry]) => {
      // Cuando el elemento se intersecta (o deja de intersectarse), actualiza el estado.
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    // Limpieza: deja de observar cuando el componente se desmonte.
    return () => {
      observer.unobserve(ref.current);
    };
  }, [options]); // Dependencia options para recrear si cambian.

  return [ref, isIntersecting];
}