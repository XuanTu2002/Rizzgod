export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-grow p-2 border rounded"
      />
      <button className="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>
    </div>
  );
}
