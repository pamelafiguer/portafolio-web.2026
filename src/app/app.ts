import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, Hero, About, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  private itemObserver?: IntersectionObserver;
  private sectionObserver?: IntersectionObserver;
  protected readonly title = signal('portafolio-web.2026');

  private setupItemReveal(): void {
    const animatedItems = Array.from(document.querySelectorAll<HTMLElement>('.fade-up'));
    if (!animatedItems.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      for (const item of animatedItems) {
        item.classList.add('visible');
      }
      return;
    }

    this.itemObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -10% 0px' }
    );

    for (const item of animatedItems) {
      this.itemObserver.observe(item);
    }
  }

  private setupSectionReveal(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section-reveal'));
    if (!sections.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      for (const section of sections) {
        section.classList.add('in-view');
      }
      return;
    }

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('in-view', entry.isIntersecting);
        }
      },
      { threshold: 0.18, rootMargin: '-8% 0px -12% 0px' }
    );

    for (const section of sections) {
      this.sectionObserver.observe(section);
    }
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.setupItemReveal();
    this.setupSectionReveal();
  }

  ngOnDestroy(): void {
    this.itemObserver?.disconnect();
    this.sectionObserver?.disconnect();
  }
}
