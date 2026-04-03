import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faReact, faPython, faNodeJs, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faChartBar, faCamera } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  icons: IconDefinition[];
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {

  projectsData: ProjectData[] = [
    {
      title: 'ChatBot IA Avanzado',
      description: 'Asistente conversacional con NLP y machine learning. Interfaz en React con backend en Python.',
      tags: ['React', 'Python', 'TensorFlow'],
      icons: [faReact, faPython, faBrain],
      link: 'https://github.com'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo con visualización de datos en tiempo real. Análisis estadísticos avanzados.',
      tags: ['Angular', 'D3.js', 'Node.js'],
      icons: [faAngular, faChartBar, faNodeJs],
      link: 'https://github.com'
    },
    {
      title: 'ML Image Recognition',
      description: 'Sistema de reconocimiento de imágenes con deep learning. Clasificación de objetos en tiempo real.',
      tags: ['TensorFlow', 'Python', 'OpenCV'],
      icons: [faBrain, faPython, faCamera],
      link: 'https://github.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}