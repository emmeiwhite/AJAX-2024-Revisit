// rest and spread operators

const scores = [65, 89, 90, 77]
const [maths, ...restArr] = scores

// We can also spread an array while passing array values to a method

function totalScore(...data) {
  const totalScore = data.reduce((acc, score) => {
    return (acc += score)
  }, 0)

  console.log(totalScore)
}

totalScore(65, 78, ...scores)
