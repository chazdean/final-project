class User < ApplicationRecord

    has_many :portfolio_items
    has_many :watchlist_items

    has_secure_password

    validates :name, presence: true
    validates :email, presence: true, uniqueness: { case_sensitive: false }
    validates :password, length: { in: 6..20 }

    def authenticate_with_credentials(email, password)
        user = User.find_by(email: email.downcase.strip)
        if user.authenticate(password)
            user
        else
            nil
        end
    end
    
end
