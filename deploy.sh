#!/bin/bash
deploy () {
    echo "Initiate deployment on $1 environment"
    firebase use "$1" --token "${FIREBASE_API_TOKEN}" --non-interactive
    firebase deploy --token "${FIREBASE_API_TOKEN}" --non-interactive
}

check_on_pr () {
    echo "Checking on PR..."
    echo "Pull Request: $TRAVIS_PULL_REQUEST"
    if [ $TRAVIS_PULL_REQUEST == false ]; then
        deploy "$1"
    else
        echo "Is a pull request..."
        echo "Not deploying."
    fi
}

echo "Executing deploy script..."
echo "Branch: $TRAVIS_BRANCH"

if [ $TRAVIS_BRANCH == "master" ]; then
    echo "Branch is master..."
    check_on_pr "${FIREBASE_PROJECT_ID_PROD}"
elif [ $TRAVIS_BRANCH == "develop" ]; then
    echo "Branch is develop..."
    check_on_pr "${FIREBASE_PROJECT_ID_DEV}"
else
    echo "Not develop branch or master..."
    echo "Not deploying."
fi