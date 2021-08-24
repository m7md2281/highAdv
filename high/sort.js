const leagueTables = [
    { team : 'milan', points:30, goals:67},
    { team : 'inter', points:30, goals:62},
    { team : 'rome', points:26, goals:77},
    { team : 'Atalanta', points:20, goals:87},
    { team : 'juve', points:28, goals:65},
   ] 

//Q5


leagueTables.sort((a, b) => {
if (a.goals == b.goals) {
  return b.points + a.points
  
}

  return b.points - a.points
  
});




console.log(leagueTables)



