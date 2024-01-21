import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

interface ItemTrajetoria{
  titulo: string;
  dataInicio: Date;
  dataFim?: Date | undefined;
  ativo: boolean;
  descricao: string 
}

@Component({
  selector: 'app-trajetoria',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './trajetoria.component.html',
  styleUrl: './trajetoria.component.scss'
})

export class TrajetoriaComponent {

  public formacaoAcademicaList: ItemTrajetoria[] = [
    {
      titulo: "Mestre em Ciência da Computação (UFSCAR)",
      dataInicio: new Date(2018, 8, 1),
      dataFim: new Date(2022, 3, 1),
      ativo: false,
      descricao: "Título da dissertação: SiMut: um framework automatizado para apoiar a redução do custo do teste de mutação com base em similaridade de programas."
    },
    {
      titulo: "Pós-graduado em Banco de Dados (Claretiano)",
      dataInicio: new Date(2021, 0, 1),
      dataFim: new Date(2021, 6, 31),
      ativo: false,
      descricao: "Conteúdo: modelagem de banco de dados, integração de banco de dados relacional com variadas linguagens de programação (CSharp, PHP e Java); SGBD: MySql."
    },
    {
      titulo: "Licenciado em Computação (Claretiano)",
      dataInicio: new Date(2017, 0, 1),
      dataFim: new Date(2017, 12, 10),
      ativo: false,
      descricao: "Conteúdo: Didática e Metodologia de Ensino; Práticas de Ensino em Computação; Avaliação Educational;  "
    },
    {
      titulo: "Tecnólogo em Gestão da Tecnologia da Informação (FATEC Tatuí)",
      dataInicio: new Date(2010, 5, 1),
      dataFim: new Date(2013, 11, 31),
      ativo: false,
      descricao: "Conteúdo: C, Java e banco de dados relacional."
    },
    {
      titulo: "Técnico em Informática (ETEC Sales Gomes)",
      dataInicio: new Date(2010, 1, 1),
      dataFim: new Date(2011, 5, 31),
      ativo: false,
      descricao: "Conteúdo: CSharp, Delphi, PHP e banco de dados relacional."
    }
  ] 

  public experienciaProfissionalList: ItemTrajetoria[] = [
    {
      titulo: 'Tecnologia Única',
      dataInicio: new Date('2022-08-15'),
      ativo: true,
      descricao: 'Desenvolvedor full-stack Pleno atuando com: ASP.NET · ASP.NET MVC · Microsoft SQL Server · TypeScript · Angular · C# · Ionic Framework'
    },
    {
      titulo: 'Etec Sales Gomes',
      dataInicio: new Date('2014-02-03'),
      ativo: true,
      descricao: 'Professor de Programação e Aplicativos Mobile, Programação e Algoritmos, Banco de Dados Relacional, Programação Web e Qualidade e Teste de Software. Além disso também atuei como coordenador do curso de Informática para Internet'
    },
    {
      titulo: 'Cenaic',
      dataInicio: new Date('2012-01-01'),
      dataFim: new Date('2014-01-01'),
      ativo: false,
      descricao: 'Professor de informática básica, desenvolvimento de jogos e desenvolvimento de websites.'
    },
    {
      titulo: 'Neo Lab Technology',
      dataInicio: new Date('2012-01-01'),
      dataFim: new Date('2013-01-01'),
      ativo: false,
      descricao: 'Sócio-proprietário. Desenvolvimento de Website utilizando PHP e MySql. Participação em melhoria contínua com sugestões e trabalho em equipe. Definição de cultura da empresa, público-alvo e missões.'
    },
    {
      titulo: 'Qi Studio',
      dataInicio: new Date('2013-06-01'),
      dataFim: new Date('2013-12-01'),
      ativo: false,
      descricao: 'Desenvolvedor full-stack: HTML, CSS, Javascript, PHP e MySql.'
    },
    {
      titulo: 'Faculdade de Tecnologia de Tatuí',
      dataInicio: new Date('2010-06-10'),
      dataFim: new Date('2011-12-01'),
      ativo: false,
      descricao: 'Monitor de Linguagem de Programação Java; Monitor de Banco de Dados.'
    }
  ] 
}
