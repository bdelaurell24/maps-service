MAPS SERVICE

An HTTP server that returns an embedded google map. 

Requests to the Server:

  Requests to the server should be to the url: http://flip1.engr.oregonstate.edu:5679/map

  Arguments are formatted as query parameters.

  Required Arguments:
  
    city 
    
    state
  
  Optional Arguments:
  
    streetAddr

    height (default = 250px)

    width (default = 450px)

  Formatting Notes: 
  
  Replace spaces in a string with '+ (i.e. 1234 Brown St   => 1234+Brown+St)
    
  States should be formatted as their 2 letter abbreviation

  Resizing Map:
  
  You can resize the iframe to suit the structure and design of your own website with the height and width arguments. These are defined in px. Please note that embedded maps are not supported below a size of 200 px in either dimension.


  Example Queries: 

  http://flip1.engr.oregonstate.edu:5679/map?city=boulder&state=co

  http://flip1.engr.oregonstate.edu:5679/map?streetAddr=20+w+34th+st&city=new+york&state=ny

  http://flip1.engr.oregonstate.edu:5679/map?city=denver&state=co&height=500&width=700

Responses from the server:

  Server will return a string with the required html to embed a map. The string can be accessed from the response text() function (i.e. res.text()). The string can then be set to the innerhtml of a div to be embedded within the page.

  Server will return a 400 error if the city or state arguments are missing.
  

Note: User must be VPNed into Oregon State's network or using a computer on the OSU network on campus.
