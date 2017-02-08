#!/bin/bash
echo "Executing deploy script..."
echo "Branch: $TRAVIS_BRANCH"
if [ $TRAVIS_BRANCH == "develop" ]; then
    echo "Branch is develop..."
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
    echo "Not develop branch..."
    echo "Not deploying."
fi