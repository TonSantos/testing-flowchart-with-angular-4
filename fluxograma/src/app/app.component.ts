import { Component, NgModule, VERSION, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

declare var flowchart: any;

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `
    <div>
      <div id="canvas"></div>
    </div>
  `,
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(){

  }
  ngOnInit(){


    let content = 'inicio=>start: PROTOCOLO|past:>http://www.google.com[blank]\n\
fim=>end: Encaminhamento|future:>http://www.google.com\n\
passo01=>operation: Auxilio Conduta|past\n\
passo02=>operation: Receita|current\n\
passo03=>subroutine: Alta|invalid\n\
pergunta1=>condition: Paciente mulher?|approved:>http://www.google.com\n\
pergunta2=>condition: DPOC?|rejected\n\
io=>inputoutput: Tratamento |future\n\
\n\
inicio->passo01(right)->pergunta1\n\
pergunta1(yes, right)->pergunta2\n\
pergunta1(no)->passo03(left)->passo01\n\
pergunta2(yes)->io->fim\n\
pergunta2(no)->passo02->fim';


    let chart = flowchart.parse(content);
        chart.drawSVG('canvas', {
            // 'x': 30,
            // 'y': 50,
            'line-width': 3,
                'line-length': 50,
                'text-margin': 10,
                'font-size': 14,
                'font': 'normal',
                'font-family': 'Helvetica',
                'font-weight': 'normal',
                'font-color': 'black',
                'line-color': 'black',
                'element-color': 'black',
                'fill': 'white',
                'yes-text': 'yes',
                'no-text': 'no',
                'arrow-end': 'block',
                'symbols': {
                'start': {
                    'font-color': 'red',
                        'element-color': 'green',
                        'fill': 'yellow'
                },
                    'end': {
                    'class': 'end-element'
                }
            },
                'flowstate': {
                'past': {
                    'fill': '#CCCCCC',
                        'font-size': 12
                },
                    'current': {
                    'fill': 'yellow',
                        'font-color': 'red',
                        'font-weight': 'bold'
                },
                    'future': {
                    'fill': '#FFFF99'
                },
                    'request': {
                    'fill': 'blue'
                },
                    'invalid': {
                    'fill': '#444444'
                },
                    'approved': {
                    'fill': '#58C4A3',
                        'font-size': 12,
                        'yes-text': 'SIM',
                        'no-text': 'NÃO'
                },
                    'rejected': {
                    'fill': '#C45879',
                        'font-size': 12,
                        'yes-text': 'POSSUI',
                        'no-text': 'NÃO POSSUI'
                }
            }
        });

  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
