from flask import Flask, render_template, url_for, request
app=Flask(__name__)

#Start endpoint
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/search')
def search():
    return request.query_string

if __name__=="__main__":
    app.run(debug=True)
