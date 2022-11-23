let Movie = () => {
    let movie_Name = "Avatar Part-II"
    let director = "James Cameron"
    let music = "AR Rahman"
    let rel_Date = 'Dec 16'
    let more_Details = {
        "actor" : ('dont know'),
        "actress" : ('someone')
    }

return <div>

    <h1>{movie_Name}</h1>
    <h2>Director: {director}</h2>
    <h3>Music : {music}</h3>
<h3>actor : {more_Details.actor}</h3>
<h3>actress : {more_Details.actress}</h3>
</div>
}

export default Movie