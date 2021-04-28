input = "DEPEND TELNET TCPIP NETCARD, DEPEND TCPIP NETCARD, DEPEND NETCARD TCPIP, DEPEND DNS TCPIP NETCARD, DEPEND BROWSER TCPIP HTML, INSTALL NETCARD, INSTALL TELNET, INSTALL foo, REMOVE NETCARD, INSTALL BROWSER, INSTALL DNS, LIST, REMOVE TELNET, REMOVE NETCARD, REMOVE DNS, REMOVE NETCARD, INSTALL NETCARD, REMOVE TCPIP, REMOVE BROWSER, REMOVE TCPIP, LIST, END"


function getOutput ( input ) {
  const commands = input.split(',')
  const depMap = {}; //Map of all services a given service depends on
  const childMap = {} // Map of all services that depend on a given services
  const active = new Set;
  const explicitService = new Set;

  const isCycle = (s1, s2) => {
    const depList = depMap[s2]
    // TODO : Think if this needs to be extended recursively
    if ( depList && depList.includes(s1))
      return true;
    return false;
  }
  
  const buildDependencyList = (s1, depList) => {
    if (depList === undefined){
      active.add(s1)
      return;
    }
    if ( depMap[s1] === undefined ){
      depMap[s1] = [];
    }
    depList.forEach((s2) => {
      if (childMap[s2] === undefined)
        childMap[s2] = [];

      if (!isCycle(s1, s2)){
        depMap[s1].push(s2) 
        childMap[s2].push(s1)
      } else {
        console.log("\t", s2, "depends on", s1, ". Ignoring command")
      }
    });

    

  }
  const installService = (s, level = 0) => {
    if ( level === 0 ) {
      if ( active.has(s) ) {
        console.log(`\t${s} is already installed.`)
        if (!explicitService.has(s)){
          console.log("\tMarking as explicit.")
          explicitService.add(s)
        }     
        return;
      }

    }
        
      const depQueue = [s]
      
      while ( depQueue.length ) {
        const curr = depQueue.pop()
        if ( depMap[curr] !== undefined ) {
          const depList = depMap[curr]
          for (let i = 0; i < depList.length; i++) {
            if (!active.has(depList[i])) {
              installService(depList[i], level + 1)
            }
          }
        } 
      }
      console.log(`\tInstalling ${s}`)
      if (level === 0)
        explicitService.add(s)
      active.add(s)
    };
    const removeService = (s, level = 0) => {
      const childQueue = [s]
      let implicit = false;
      if (level == 0 && !active.has(s)){
        console.log(`\t${s} is not installed.`)
        return;
      }
      if ( !active.has(s) )
        return;
      if (level === 0 && explicitService.has(s)){ 
        explicitService.delete(s)
        implicit = true;
      }

      while ( childQueue.length ) {
        const curr = childQueue.pop()
        if ( childMap[curr] !== undefined ) {
          const childList = childMap[curr]
          for (let i = 0; i < childList.length; i++) {
            if (active.has(childList[i])) {
              if (level === 0){
                console.log(`\t${s} is still needed.`)
                if ( implicit )
                  console.log("\tMarking as implicitly installed")
              }
              if (!explicitService.has(childList[i]))
                removeService(childList[i], level + 1)
              return;
            } else {
              childMap[curr].splice(i,1)
              i--;
            }
          }
        } 
      }

      if ( level === 0 ){
        console.log(`\tRemoving ${s}`)
        active.delete(s)
        delete childMap[s]
        const keys = Object.keys(childMap)
        keys.forEach(k => {
          if(childMap[k] && childMap[k].includes(s) && childMap[k].length == 1) {
            childMap[k] = []
            if (!explicitService[k])
              removeService(k, 0)

          }
        })
      } else {
        active.delete(s)
      } 
   };
    const listServices = () => {
      let serviceList = Array.from(active)
      serviceList.forEach( s =>
      console.log(`\t${s}`)
      )

    }

    

  for ( let i = 0; i < commands.length; i++ ){
    console.log(commands[i].trim())
    const current = commands[i].trim().split(' ')
    const verb = current[0]
    let service = null;
    if (verb !== 'LIST') {
      service = current[1];   
    }

    switch (verb) {
      case 'DEPEND' : buildDependencyList(service, current.slice(2)) 
        break;
      case 'INSTALL' : installService(service);
        break;
      case 'REMOVE'  : removeService(service); 
        break;
      case 'LIST'   : listServices(); 
        break;
      case 'END' : return;  

    }
  }
}


getOutput( input )
