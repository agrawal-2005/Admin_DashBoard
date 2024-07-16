import React, { useEffect, useState } from 'react';
import { Header } from '../components';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

const Editor = () => {
  const [content, setContent] = useState(localStorage.getItem('editorContent') || '');

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('editorContent', content);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [content]);

  const handleChange = (e) => {
    setContent(e.value);
    localStorage.setItem('editorContent', e.value);
  };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent
        value={content}
        change={handleChange}
      >
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
