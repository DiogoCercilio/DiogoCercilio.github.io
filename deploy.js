var ghpages = require('gh-pages');
 
console.log('Deploying');

ghpages.publish('build', {
    branch: 'master',
    repo: 'https://github.com/DiogoCercilio/DiogoCercilio.github.io'
}, function(err, success) {
    if (err) console.log('Erro: ',err);

    console.log('Sucesso: ',success);
});