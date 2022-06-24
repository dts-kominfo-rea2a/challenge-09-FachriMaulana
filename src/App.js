import "./App.css";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((elemen, index) => {
        return <Contact key={index} data={elemen} />;
      })}
    </div>
  );
};

export default App;
