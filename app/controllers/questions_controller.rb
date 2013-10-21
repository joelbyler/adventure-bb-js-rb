require 'pusher'
 
Pusher.app_id = '57349'
Pusher.key = '3b0287f4d7ef29bdf1fa'
Pusher.secret = 'ac804e2b990f79a5b056'

class QuestionsController < ApplicationController
  respond_to :json

  #todo: persist
  
  @@current_id = 0

  def self.questions
    @@question_list ||= []
  end

  def self.next_id
    @@current_id = @@current_id + 1
  end

  def index                                                                                                                                                  
    render :json => QuestionsController.questions
  end                                                                                                                                                        

  def show
    render :json => QuestionsController.questions
  end

  def create
    question = params[:question]
    question[:id] = QuestionsController.next_id
    question[:votes] = []
    QuestionsController.questions.push question

    Pusher['question-channel'].trigger('created', question, request.headers["X-Pusher-Socket-ID"])

    render :json => question
  end

  def update
    question = params[:question]
    found_index = QuestionsController.questions.index {|q| question[:id]}
    QuestionsController.questions[found_index] = question if found_index
    
    Pusher['question-channel'].trigger('updated', question, request.headers["X-Pusher-Socket-ID"])

    render :json => question
  end
end
