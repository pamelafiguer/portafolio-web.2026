import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular, faReact, faPython, faJava, faPhp, faGit, faGithub, faGitlab,
  faBootstrap, faCss3Alt, faHtml5, faFigma
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, faGear, faBrain, faCode, faPalette
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About implements OnInit, AfterViewInit, OnDestroy {

  // Icons para usar en template
  faAngular = faAngular;
  faReact = faReact;
  faPython = faPython;
  faJava = faJava;
  faPhp = faPhp;
  faGit = faGit;
  faGithub = faGithub;
  faGitlab = faGitlab;
  faBootstrap = faBootstrap;
  faCss3Alt = faCss3Alt;
  faHtml5 = faHtml5;
  faGear = faGear;
  faBrain = faBrain;
  faDatabase = faDatabase;
  faFigma = faFigma;

  // Mapeo de tecnologías con sus iconos
  techWithIcons = [
    { name: 'Angular', icon: faAngular, color: '#dd0031' },
    { name: 'TypeScript', icon: faCode, color: '#3178c6' },
    { name: 'React', icon: faReact, color: '#61dafb' },
    { name: 'Python', icon: faPython, color: '#3776ab' },
    { name: 'Scikit-Learn', icon: faBrain, color: '#f7931e' },
    { name: 'Java', icon: faJava, color: '#007396' },
    { name: 'PHP / Laravel', icon: faPhp, color: '#777bb4' },
    { name: 'PostgreSQL', icon: faDatabase, color: '#336791' },
    { name: 'MongoDB', icon: faDatabase, color: '#47a248' },
    { name: 'Figma', icon: faFigma, color: '#f24e1e' },
    { name: 'Git / GitHub', icon: faGithub, color: '#ffffff' },
    { name: 'Bootstrap', icon: faBootstrap, color: '#7952b3' },
    { name: 'Tailwind CSS', icon: faCss3Alt, color: '#06b6d4' },
    { name: 'HTML5 / CSS3', icon: faHtml5, color: '#e34c26' }
  ];

  frontendSkills = [
    { name: 'Angular 19', percentage: 90, icon: faAngular },
    { name: 'TypeScript', percentage: 85, icon: faCode },
    { name: 'React', percentage: 75, icon: faReact },
    { name: 'HTML5 / CSS3', percentage: 95, icon: faHtml5 },
    { name: 'Bootstrap / Tailwind', percentage: 85, icon: faBootstrap }
  ];

  mlSkills = [
    { name: 'Scikit-Learn', percentage: 82, icon: faBrain },
    { name: 'Google Colab', percentage: 88, icon: faGear },
    { name: 'Pandas / NumPy', percentage: 80, icon: faPython },
    { name: 'Modelos Supervisados', percentage: 78, icon: faBrain },
    { name: 'Gradient Boosting', percentage: 72, icon: faBrain }
  ];

  backendSkills = [
    { name: 'Python', percentage: 85, icon: faPython },
    { name: 'Java', percentage: 70, icon: faJava },
    { name: 'PHP / Laravel', percentage: 75, icon: faPhp }
  ];

  dbDesignSkills = [
    { name: 'SQL / PostgreSQL / MySQL', percentage: 80, icon: faDatabase },
    { name: 'MongoDB', percentage: 68, icon: faDatabase },
    { name: 'Figma', percentage: 85, icon: faFigma },
    { name: 'Git / GitHub', percentage: 88, icon: faGit },
  ];

  technologies: { name: string; icon: IconDefinition; color: string }[] = [];

  private intersectionObserver?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.technologies = this.techWithIcons;
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          // Animar las barras de progreso solo cuando entra
          const fillBars = (entry.target as HTMLElement).querySelectorAll('.sbar-fill');
          fillBars.forEach(bar => {
            const width = (bar as HTMLElement).getAttribute('data-w');
            (bar as HTMLElement).style.width = width + '%';
          });
        } else {
          // Remover clase cuando sale del viewport
          entry.target.classList.remove('on');
          // Resetear barras cuando sale
          const fillBars = (entry.target as HTMLElement).querySelectorAll('.sbar-fill');
          fillBars.forEach(bar => {
            (bar as HTMLElement).style.width = '0%';
          });
        }
      });
    }, options);

    // Observar elementos con clase fade
    const elements = document.querySelectorAll('.fade');
    elements.forEach(el => {
      this.intersectionObserver?.observe(el);
    });
  }
}