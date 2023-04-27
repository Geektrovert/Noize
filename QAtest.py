from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Initialize the browser and navigate to the user page
browser = webdriver.Chrome()
browser.get('https://example.com/user-page')

# Enter the name "John Smith" into the name field
name_field = browser.find_element_by_id('name')
name_field.send_keys('John Smith')

# Enter the age "35" into the age field
age_field = browser.find_element_by_id('age')
age_field.send_keys('35')

# Select the profession "Software Engineer" from the dropdown menu
profession_dropdown = browser.find_element_by_id('profession')
profession_options = profession_dropdown.find_elements_by_tag_name('option')
for option in profession_options:
    if option.text == 'Software Engineer':
        option.click()
        break

# Enter the business type "Technology" into the business type field
business_type_field = browser.find_element_by_id('business-type')
business_type_field.send_keys('Technology')

# Enter the years of experience "10" into the years of experience field
experience_field = browser.find_element_by_id('years-experience')
experience_field.send_keys('10')

# Click the submit button to save the user profile
submit_button = browser.find_element_by_id('submit')
submit_button.click()

# Verify that the success message appears
success_message = browser.find_element_by_id('success-message')
assert success_message.text == 'User profile saved successfully!'

# Close the browser
browser.quit()
