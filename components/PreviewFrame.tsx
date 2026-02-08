import React, { useEffect, useRef } from 'react';

interface PreviewFrameProps {
  code: string;
  title: string;
}

const PreviewFrame: React.FC<PreviewFrameProps> = ({ code, title }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }
  }, [code]);

  return (
    <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-inner border border-gray-200 relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 space-x-2 space-x-reverse">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-xs text-gray-500 mr-4 font-mono select-none">cloud-preview://{title.replace(/\s+/g, '-').toLowerCase()}</span>
        </div>
      <iframe
        ref={iframeRef}
        title="Preview"
        className="w-full h-[calc(100%-2rem)] mt-8"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default PreviewFrame;