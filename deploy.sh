#!/bin/bash
echo "Executing deploy script..."
echo "Deploy script in test mode! Everything !== 'master' will be automatically deployed ;-)"
echo "Branch: $TRAVIS_BRANCH"
if [ $TRAVIS_BRANCH != "master" ]; then
    echo "Branch is master..."
    echo "Checking on PR..."
    echo "Pull Request: $TRAVIS_PULL_REQUEST"
    if [ $TRAVIS_PULL_REQUEST == false ]; then
        echo "Initiate deployment :)"
        firebase use m4m-geekbites-dev --token "${FIREBASE_API_TOKEN}"
        firebase deploy --token "${FIREBASE_API_TOKEN}"
    else
        echo "Is a pull request..."
        echo "Not deploying."
    fi
else
    echo "Not master branch..."
    echo "Not deploying."
fi