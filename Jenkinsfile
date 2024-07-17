pipeline{
    agent any
        stages{
	        stage("Clone code from Github repository"){
		            steps{
			                    git url: "https://github.com/ShetManoj/calculator-app.git", branch: "main"
					                    echo "Code clonned successfully"
							                }
									        }
										        stage("Build"){
											            steps{
												                    sh 'docker build -t calculator-app:latest .'
														                    echo  "Code built successfully"
																                }
																		            
																			            }
																				            stage("Stop and remove dangling containers"){
																					                steps{
																							                sh 'docker stop calculator-app || true'
																									                sh 'docker rm calculator-app || true'
																											            }
																												            }
																													            stage("Deploy"){
																														                steps{
																																                sh 'docker run -d -p 8000:80 calculator-app:latest'
																																		                echo "Code deployed successfully"
																																				                
																																						            }
																																							                
																																									        }
																																										    }
																																										    }pipeline{
																																										        agent any
																																											    stages{
																																											            stage("Clone code from Github repository"){
																																												                steps{
																																														                git url: "https://github.com/ShetManoj/calculator-app.git", branch: "main"
																																																                echo "Code clonned successfully"
																																																		            }
																																																			            }
																																																				            stage("Build"){
																																																					                steps{
																																																							                sh 'docker build -t calculator-app:latest .'
																																																									                echo  "Code built successfully"
																																																											            }
																																																												                
																																																														        }
																																																															        stage("Stop and remove dangling containers"){
																																																																            steps{
																																																																	                    sh 'docker stop calculator-app || true'
																																																																			                    sh 'docker rm calculator-app || true'
																																																																					                }
																																																																							        }
																																																																								        stage("Deploy"){
																																																																									            steps{
																																																																										                    sh 'docker run -d -p 8000:80 calculator-app:latest'
																																																																												                    echo "Code deployed successfully"
																																																																														                    
																																																																																                }
																																																																																		            
																																																																																			            }
																																																																																				        }
																																																																																					}pipeline{
																																																																																					    agent any
																																																																																					        stages{
																																																																																						        stage("Clone code from Github repository"){
																																																																																							            steps{
																																																																																								                    git url: "https://github.com/ShetManoj/calculator-app.git", branch: "main"
																																																																																										                    echo "Code clonned successfully"
																																																																																												                }
																																																																																														        }
																																																																																															        stage("Build"){
																																																																																																            steps{
																																																																																																	                    sh 'docker build -t calculator-app:latest .'
																																																																																																			                    echo  "Code built successfully"
																																																																																																					                }
																																																																																																							            
																																																																																																								            }
																																																																																																									            stage("Stop and remove dangling containers"){
																																																																																																										                steps{
																																																																																																												                sh 'docker stop calculator-app || true'
																																																																																																														                sh 'docker rm calculator-app || true'
																																																																																																																            }
																																																																																																																	            }
																																																																																																																		            stage("Deploy"){
																																																																																																																			                steps{
																																																																																																																					                sh 'docker run -d -p 8000:80 calculator-app:latest'
																																																																																																																							                echo "Code deployed successfully"
																																																																																																																									                
																																																																																																																											            }
																																																																																																																												                
																																																																																																																														        }
																																																																																																																															    }
																																																																																																																															    }pipeline{
																																																																																																																															        agent any
																																																																																																																																    stages{
																																																																																																																																            stage("Clone code from Github repository"){
																																																																																																																																	                steps{
																																																																																																																																			                git url: "https://github.com/ShetManoj/calculator-app.git", branch: "main"
																																																																																																																																					                echo "Code clonned successfully"
																																																																																																																																							            }
																																																																																																																																								            }
																																																																																																																																									            stage("Build"){
																																																																																																																																										                steps{
																																																																																																																																												                sh 'docker build -t calculator-app:latest .'
																																																																																																																																														                echo  "Code built successfully"
																																																																																																																																																            }
																																																																																																																																																	                
																																																																																																																																																			        }
																																																																																																																																																				        stage("Stop and remove dangling containers"){
																																																																																																																																																					            steps{
																																																																																																																																																						                    sh 'docker stop calculator-app || true'
																																																																																																																																																								                    sh 'docker rm calculator-app || true'
																																																																																																																																																										                }
																																																																																																																																																												        }
																																																																																																																																																													        stage("Deploy"){
																																																																																																																																																														            steps{
																																																																																																																																																															                    sh 'docker run -d -p 8000:80 calculator-app:latest'
																																																																																																																																																																	                    echo "Code deployed successfully"
																																																																																																																																																																			                    
																																																																																																																																																																					                }
																																																																																																																																																																							            
																																																																																																																																																																								            }
																																																																																																																																																																									        }
																																																																																																																																																																										}pipeline{
																																																																																																																																																																										    agent any
																																																																																																																																																																										        stages{
																																																																																																																																																																											        stage("Clone code from Github repository"){
																																																																																																																																																																												            steps{
																																																																																																																																																																													                    git url: "https://github.com/ShetManoj/calculator-app.git", branch: "main"
																																																																																																																																																																															                    echo "Code clonned successfully"
																																																																																																																																																																																	                }
																																																																																																																																																																																			        }
																																																																																																																																																																																				        stage("Build"){
																																																																																																																																																																																					            steps{
																																																																																																																																																																																						                    sh 'docker build -t calculator-app:latest .'
																																																																																																																																																																																								                    echo  "Code built successfully"
																																																																																																																																																																																										                }
																																																																																																																																																																																												            
																																																																																																																																																																																													            }
																																																																																																																																																																																														            stage("Stop and remove dangling containers"){
																																																																																																																																																																																															                steps{
																																																																																																																																																																																																	                sh 'docker stop calculator-app || true'
																																																																																																																																																																																																			                sh 'docker rm calculator-app || true'
																																																																																																																																																																																																					            }
																																																																																																																																																																																																						            }
																																																																																																																																																																																																							            stage("Deploy"){
																																																																																																																																																																																																								                steps{
																																																																																																																																																																																																										                sh 'docker run -d -p 8000:80 calculator-app:latest'
																																																																																																																																																																																																												                echo "Code deployed successfully"
																																																																																																																																																																																																														                
																																																																																																																																																																																																																            }
																																																																																																																																																																																																																	                
																																																																																																																																																																																																																			        }
																																																																																																																																																																																																																				    }
																																																																																																																																																																																																																				    }
