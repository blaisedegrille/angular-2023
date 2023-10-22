import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import { Editor } from 'ngx-editor';

/* const editor = new EditorJS({
  holder: 'editorjs',
  tools: {
    header: Header,
  },
}); */

/* const config = {
  holder: 'editorjs',
  tools: {
    header: Header,
  },
}; */

@Component({
  selector: 'ang23-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy {
  // @ViewChild(EditorJS) editor: EditorJS = new EditorJS('editorjs');
  // @ViewChild(EditorJS) editor: EditorJS = new EditorJS(config);

  editor!: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
