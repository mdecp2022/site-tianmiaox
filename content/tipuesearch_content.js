var tipuesearch = {"pages": [{'title': 'hw', 'text': '', 'tags': '', 'url': 'hw.html'}, {'title': 'w10', 'text': '\n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11', 'text': '\n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '\n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '\n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '\n \n 為何學習計算機程式需要建立個人倉儲? \n 可以開一個屬於自己的網站還能讓大家看到，還不用花錢 \n 全球資訊網能夠提供甚麼功能或有什麼優點? \n 主要是文字檔案格式化和超文件標示語言(HTML)。除了格式化文字之外，網頁還可能包含圖片、影片、聲音和軟體元件，這些元件會在使用者的網頁瀏覽器中呈現為多媒體內容的連貫頁面。 \n Replit, stud.cycu.org 與 localhost 分別代表甚麼? \n (1) Replit 是一個提供線上集成開發環境服務的公司 \n (2) stud.cycu.org 是學校網站? \n (3) localhost 是一個在電腦網路中用於表示「此電腦」的主機名。 \n https, ssh 到底提供使用者那些功能或優點? \n (1) https 的全稱是超文本傳輸安全協議（Hypertext Transfer Protocol Secure），是一種網絡安全傳輸協議，可實現瀏覽器和網站服務器數據傳輸加密。 \n (2) ssh 的全稱是安全外殼協定（Secure Shell Protocol）是一種加密的網路傳輸協定，可在不安全的網路中為網路服務提供安全的傳輸環境。 \n Brython 與 Python 有甚麼差別? \n Brython 比較適合入門 \n 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \n Brython 很強 \n 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? \n 專業術語 \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};