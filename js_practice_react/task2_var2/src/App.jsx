import './App.css';
import TextArea from './components/TextArea';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const fullText =
    '"Boiler plate" originally referred to the rolled steel used to make boilers to heat water. Metal printing plates (type metal) used in hot metal typesetting of prepared text such as advertisements or syndicated columns were distributed to small, local newspapers, and became known as boilerplates by analogy. One large supplier to newspapers of this kind of boilerplate was the Western Newspaper Union, which supplied "ready-to-print stories [which] contained national or international news" to papers with smaller geographic footprints, which could include advertisements pre-printed next to the conventional content.';

  const sentences = fullText.split('.');
  const initialText = sentences[0];

  const [isFullTextShown, setIsFullTextShown] = useState(false);

  function handleButtonClick() {
    setIsFullTextShown(!isFullTextShown);
  }

  return (
    <div>
      <TextArea text={isFullTextShown ? fullText : initialText} />
      <Button onClick={handleButtonClick}>
        {isFullTextShown ? 'Show less' : 'Show more'}
      </Button>
    </div>
  );
}

export default App;
