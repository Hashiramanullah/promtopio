import "../styles/global.css";
import Nav from "../components/Nav";
import Provider from "../components/Provider";
export const metaData  ={
    title:"Promptopia",
    description:"Discover & Share AI Prompt"
}

function Rootlayout({children}) {

    return (
        <html lang='en'>
        <body>
          <Provider>

            <div className='main'>
              <div className='gradient' />
            </div>
    
            <main className='app'>
              <Nav />
                {children}
            </main>
          </Provider>
        </body>
      </html>
  )
}

export default Rootlayout;