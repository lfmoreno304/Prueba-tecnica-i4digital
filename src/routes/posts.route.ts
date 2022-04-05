import { Router } from "express";
import { getPosts } from "../controllers/posts.controller";

const postsRouter = Router()
/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties: 
 *          userId:
 *              type: string
 *              description: id of the user who creates the post 
 *          id:
 *            type: string
 *            description: id of the post
 *          title:
 *              type: string
 *              description: title of the post
 *          body:
 *              type: string
 *              description: the main content of the post
 *      required:
 *          - userId
 *          - id
 *      example:
 *          userId: 1
 *          id: 1
 *          title: my firts post
 *          body:  this is my firts post        
 *              
 */
/**
 * @swagger
 * tags:
 *  name: Posts
 *  description: Posts endpoint
 */
/**
 * @swagger
 * /posts:
 *  get:
 *    summary: Return a list of posts
 *    tags: [Posts]       
 *    responses:
 *      200:
 *        description: the lisk of posts
 *        content:
 *           aplication/json:
 *              schema:
 *                  type: array
 *                  items: 
 *                      $ref: '#/components/schemas/Post'          
 */
postsRouter.get('/posts', getPosts)

export default postsRouter