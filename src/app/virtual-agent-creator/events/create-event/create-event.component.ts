import { Component, OnInit } from '@angular/core';
/* import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'; */

import * as editorAppJs from '../../../../assets/js/mxgraph/app.js'

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mxgraphInit();
  }

  mxgraphInit = () => {

    editorAppJs.createEditor('src/assets/js/mxgraph/diagrameditor.xml');

    var mxBasePath = 'assets/js/mxgraph';

    var urlParams = (function (url) {
      var result = new Object();
      var params = window.location.search.slice(1).split('&');
      var idx;

      for (var i = 0; i < params.length; i++) {
        idx = params[i].indexOf('=');

        if (idx > 0) {
          result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
        }
      }

      return result;
    })(window.location.href);

    var mxLanguage = urlParams['lang'];
  }

}

/* export class CreateEventComponent implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;

  ngAfterViewInit() {
    const graph = new mxGraph(this.graphContainer.nativeElement);

    try {
      const parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();

      const vertex1 = graph.insertVertex(parent, '1', 'Vertex 1', 0, 0, 200, 80);
      const vertex2 = graph.insertVertex(parent, '2', 'Vertex 2', 0, 0, 200, 80);

      graph.insertEdge(parent, '', '', vertex1, vertex2);
    } finally {
      graph.getModel().endUpdate();
      new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }

} */
