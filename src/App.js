// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import UserCard from './components/UserCard';

const data = [
  {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName : "Title-1",
    _id : 1,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",

   },
   {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName : "Title-2",
    _id : 2,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",

   },
   {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName : "Title-3",
    _id : 3,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",

   },
   {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName : "Title-4",
    _id : 4,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",

   },
];

const userData = [
   {
      name: "Kshitij",
      age: 20,
      designation: "Developer",
      url:"https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
   },
   {
      name: "Ashu",
      age: 20,
      designation: "Developer",
      url:"https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
   },
   {
      name: "Dhruv",
      age: 20,
      designation: "Developer",
      url:"",
   },
];
function App() {
  const title = "Hey lets get Started";
  return (
    <div className='container'>

    <h1>{title}</h1>
    <br/>
    <div className='row'>
    {
      data.map((val,i) => {
        return (
          <div className = "col-12 col-sm-4 col-md-3 p-3">
               <Card values = {val} />
          </div>
        );
      })}
      </div>
      <div className='row'>
      {
         userData.map((val) =>{
            return (
            <div className = "col-12 col-sm-6 p-3">
               <UserCard {...val} />
          </div>
            );
        })}
     </div>
    </div>
  );
   }
    //..... (react lect - 2 [basic] ).....(inside div row ).
     /* <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>
    <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>
    <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>
    <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>
    <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>
    <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>
    <div className = "col-12 col-sm-4 col-md-3">
       <Card/>
    </div>  */
    
    



    //.... (react lect - 1).....
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
 

export default App;
