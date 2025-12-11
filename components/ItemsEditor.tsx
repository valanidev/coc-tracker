interface ItemsEditorProps {
  items: any[]
}

const ItemsEditor = ({ items }: ItemsEditorProps) => {
  return items.map((item) => {
    const itemCount = item.cnt

    return (
      <div key={item.data} className="my-2 rounded-md bg-gray-200 p-2">
        {Array.from({ length: itemCount }).map((_, index) => (
          <div key={index} className="m-1 rounded-sm bg-white p-2 shadow-sm">
            <p>
              Item {item.data} level {item.levels[index]}
            </p>
          </div>
        ))}
      </div>
    )
  })
}

export default ItemsEditor
