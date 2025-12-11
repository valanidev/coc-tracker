'use client'

import ItemsEditor from '@/components/ItemsEditor'
import { isDataValid, regroupItems } from '@/utils'
import { useState } from 'react'

const Edit = () => {
  const [clipboardContent, setClipboardContent] = useState<string>('')

  return (
    <div className="m-4">
      <button
        className="mb-2 cursor-pointer rounded-md bg-lime-600 p-4 text-white"
        onClick={() => {
          navigator.clipboard
            .readText()
            .then((content) => setClipboardContent(content))
        }}
      >
        Paste Village Data
      </button>

      {clipboardContent &&
        (isDataValid(clipboardContent) ? (
          <>
            <div className="mb-2 rounded-sm bg-green-200 p-4">
              Data is valid!
            </div>

            <ItemsEditor
              items={regroupItems(JSON.parse(clipboardContent).buildings)}
            />
            {/* <pre className="mx-2 rounded-sm bg-gray-200 p-4">
              {JSON.stringify(
                regroupItems(JSON.parse(clipboardContent).buildings),
                null,
                2,
              )}
            </pre> */}
          </>
        ) : (
          <div className="mx-2 mb-4 rounded-sm bg-red-200 p-4">
            Data is invalid!
          </div>
        ))}
    </div>
  )
}

export default Edit
