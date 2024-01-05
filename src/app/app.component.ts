import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { ApresentacaoComponent } from './componentes/apresentacao/apresentacao.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SobreMimComponent } from './componentes/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { TrajetoriaComponent } from './componentes/trajetoria/trajetoria.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ApresentacaoComponent,
    ExperienciaComponent, SobreMimComponent, ProjetosComponent, TecnologiasComponent,
    TrajetoriaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio2024';
}
