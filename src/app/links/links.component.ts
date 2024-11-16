import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
  imports: [CommonModule],
})
export class LinksComponent {
  links = [
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/plastina/',
      image: 'assets/linkedin.gif',
    },
    {
      title: 'Github',
      url: 'https://github.com/plastina',
      image: 'assets/github.gif',
    },
    {
      title: 'Gmail',
      url: 'mailto:plastina.bp@gmail.com',
      image: 'assets/gmail.gif',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/plastinab/',
      image: 'assets/instagram.gif',
    },
    {
      title: 'X',
      url: 'https://x.com/plastina',
      image: 'assets/twitter.gif',
    },
  ];
}
