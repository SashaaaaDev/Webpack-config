import * as $ from 'jquery'
import Post from './post'
import './css/style.css'
import json from './assets/data'
import logo from './assets/icon-square-big'
import xml from './assets/data.xml'
import csv from '@/assets/data.csv'

const post = new Post('Webpack Post Title', logo)

// console.log('Post to string:', post.toString())

$('pre').html(post.toString())

console.log('XML:', xml)
console.log('JSON:', json)
console.log('CSV:', csv)
