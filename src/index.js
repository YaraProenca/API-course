const express = require('express');
const {uuid} = require('uuidv4');

const app = express();
app.use(express.json());

const projects=[];

app.get('/projects', (req,res)=>
{
  return res.json(projects)
});

app.post('/projects', (req,res)=>
{
  const {title, owner} = req.body

  const id = uuid();

  const project = 
  {
    id,
    title,
    owner
  };

  projects.push(project);
 
  return res.json(projects)
})

app.put('/projects/:id', (req,res)=>
{
  const {id} = req.params;
  const {title, owner} = req.body
  const projectsIndex = projects.findIndex(project => project.id == id);

  if (projectsIndex < 0)
  {
    return res.status(400).json({error: 'Not found 😕'});
  } 
 
  const project = 
  {
    id,
    title,
    owner
  };

  projects[projectsIndex] = project;
  return res.json(project)
})

app.delete('/projects', (req,res)=>
{
  return res.json([
    'Project 1',
    'Project 2',
    'Project 4'
  ])
})
app.listen(3000, ()=>
{
  console.log('Backend Started!🤣👌✌😉😎');
});

