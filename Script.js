body {

h2 {
  text-align: center;
  padding: 10px;
}

.board {
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.column {
  background: #e2e4e6;
  border-radius: 8px;
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.column h3 {
  text-align: center;
}

.task {
  background: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}

.add-task {
  margin-top: auto;
  display: flex;
  gap: 5px;
}

input {
  flex: 1;
  padding: 5px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 4px;
}

button:hover {
  background: #0056b3;
}
