import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {

  projectsData = [
    {
      title: 'ChatBot IA Avanzado',
      description: 'Asistente conversacional con NLP y machine learning. Interfaz en React con backend en Python.',
      tags: ['React', 'Python', 'TensorFlow'],
      icons: ['⚛️', '🐍', '🤖'],
      link: 'https://github.com'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo con visualización de datos en tiempo real. Análisis estadísticos avanzados.',
      tags: ['Angular', 'D3.js', 'Node.js'],
      icons: ['🅰️', '📊', '💻'],
      link: 'https://github.com'
    },
    {
      title: 'ML Image Recognition',
      description: 'Sistema de reconocimiento de imágenes con deep learning. Clasificación de objetos en tiempo real.',
      tags: ['TensorFlow', 'Python', 'OpenCV'],
      icons: ['🤖', '🐍', '📸'],
      link: 'https://github.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}