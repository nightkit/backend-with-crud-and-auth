# 🌙 backend-with-crud-and-auth
``backend-with-crud-and-auth`` is a NodeJS & MongoDB based boilerplate that utilizes Express, bcrypt and other libraries for setting up a server and authentication.

You can use it for:
  - Quickly prototyping stuff in Hackathons.
  - Avoiding messy setups and only writing what's important.

# Get Started

### Setup Database & Token
Register on MongoDB Atlas or your DB provider of choice and save the connection URL. Check ``.env.sample`` and create another file ``.env`` with the same contents. Replace ``Your_DatabasE_urI`` in the new ``.env`` with your saved connection URL. Also, don't forget to replace the ``SECRET`` with a long and hard-to-remember string.


### Installing Dependencies
Run ``npm install`` or ``yarn`` depending on your case.

### Setting RateLimiting Thresholds
Change the ``RATE_LIMIT_TIME`` and ``RATE_LIMIT_THRESHOLD`` variables to your desired configuration or use the default one given below.

```env
RATE_LIMIT_TIME = 900000
RATE_LIMIT_THRESHOLD = 100
```

## Running locally and Hosting
This can be pretty much hosted anywhere and on any platform that supports NodeJS. I usually like to use Heroku for hosting my backends. You can use any popular host like AWS, Digital Ocean, etc. with the required setups. To run it locally though, just run ``npm run`` in the command line and you should be set. The application would be available on port ``8300`` locally.

### Credits
Thanks to RecoilJS - Facebook, TailwindCSS, and all other open-source libraries that I may have used while building this.

