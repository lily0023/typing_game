Rails.application.config.middleware.insert_before 0, Rack::Cors do
   allow do
     origins 'http://localhost:8000', 'https://typing-game-lake-one.vercel.app'
     
     resource '*',
       headers: :any,
       methods: %i[get post put patch delete options head]
       ## Cookieを使用する場合下記追加
       # credentials: true
       ## ユーザー認証扱う場合下記追加
       # expose: %w[access-token uid client expiry]
   end
 end
