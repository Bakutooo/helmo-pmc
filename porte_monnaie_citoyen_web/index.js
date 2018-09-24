let test = function() {
    fetch("http://localhost/backend/citizen")
    .then(res => res.json())
    .then(res => console.log(res));
}

test();