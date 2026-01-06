import FeedbackForm from "./components/FeedbackForm";
import ImageSlideshow from "./components/ImageSlideshow";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="space-y-8 p-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  );
}

export default App;
