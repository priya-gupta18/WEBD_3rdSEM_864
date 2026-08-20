const fs =require(`node:fs`);

try{
    const content = 'This is written synchronously.';
    fs.writeFileSync('Output.txt',content,'utf8');
    console.log('File written successful!');
}
    catch(err){
        console.log(err);
    }
