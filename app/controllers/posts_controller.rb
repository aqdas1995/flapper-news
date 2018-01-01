class PostsController < ApplicationController

  def index
    @post = Post.all
    render json: { posts: @post }, status: 200
  end

  def create
    @post = Post.create(post_params)
    render json: { saved_post: @post }, status: 200
  end

  def show
    @post = Post.find(params[:id])
    render json: { post: @post }, status: 200
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)
    render json: { updated_post: @post }, status: 200
  end

  private

  def post_params
    params.require(:post).permit(:link, :title, :upvotes)
  end
end
