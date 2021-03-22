let finalGrade = (exam, project) => {
    let result = 0
    exam > 90 ?? project > 10 ? result = 100 :
    exam > 75 ?? project > 5 ? result = 90 :
    exam > 50 ?? project > 2 ? result = 75 : 
    result = 0
    return result
}

console.log( finalGrade(70, 2))