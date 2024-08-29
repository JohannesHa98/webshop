'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((module) => {
      })
      .catch((err) => {
        console.error('Failed to load Bootstrap JavaScript', err);
      });
  }, []);

  return (
    <main>
      <div>

      </div>
    </main>
  );
}
