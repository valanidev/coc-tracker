'use client'

import { isDataValid } from '@/utils'
import { useState } from 'react'

const Edit = () => {
  const [clipboardContent, setClipboardContent] = useState<string>('')

  return (
    <div>
      <button
        className="m-4 cursor-pointer bg-lime-600 p-4 text-white hover:bg-lime-600/95"
        onClick={() => {
          navigator.clipboard
            .readText()
            .then((content) => setClipboardContent(content))
        }}
      >
        Paste Village Data
      </button>

      {isDataValid(clipboardContent) ? (
        <div className="mx-2 mb-4 rounded-sm bg-green-200 p-4">
          Data is valid!
        </div>
      ) : (
        <div className="mx-2 mb-4 rounded-sm bg-red-200 p-4">
          Data is invalid!
        </div>
      )}

      <pre className="mx-2 min-h-40 rounded-sm bg-gray-200 p-4">
        {clipboardContent}
      </pre>
    </div>
  )
}

export default Edit
