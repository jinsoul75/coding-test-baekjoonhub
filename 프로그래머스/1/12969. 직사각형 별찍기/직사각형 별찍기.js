process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = '*'.repeat(n[0])
    for(let i=0; i<n[1]; i++){
            console.log(a)
    }

});