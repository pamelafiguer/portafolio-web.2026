import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About implements OnInit {

  skillsData = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      level: 5,
      type: 'c',
      skills: ['React', 'Angular', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: 'Machine Learning',
      icon: '🤖',
      level: 4,
      type: 'p',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas']
    },
    {
      category: 'Herramientas',
      icon: '🛠️',
      level: 4,
      type: 'pk',
      skills: ['Git', 'VS Code', 'Figma', 'Jupyter']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getFilledDots(level: number): boolean[] {
    return Array(5).fill(false).map((_, i) => i < level);
  }
}