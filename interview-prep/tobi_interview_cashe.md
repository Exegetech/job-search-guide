## What is a class?

A text-book answer: classes are a blue-print for constructing computer models for real or virtual objects... boring.

In reality: classes hold data, have methods that interact with that data, and are used to instantiate objects.

Like this.

    class WhatAreClasses
      def initialize
        @data = "I'm instance data of this object. Hello."
      end

      def method
        puts @data.gsub("instance", "altered")
      end
    end

object = WhatAreClasses.new
object.method
 #=> I'm altered data of this object. Hello.
 
## What is an object?

An instance of a class.

To some, it's also the root class in ruby (Object).

Classes themselves descend from the Object root class. (Kudos to Ezra)


## What is a module? Can you tell me the difference between classes and modules?

Modules serve as a mechanism for namespaces.

    module ANamespace
      class AClass
        def initialize
          puts "Another object, coming right up!"
        end
      end
    end

    ANamespace::AClass.new
     #=> Another object, coming right up!

Also, modules provide as a mechanism for multiple inheritance via mix-ins and cannot be instantiated like classes can.

    module AMixIn
      def who_am_i?
        puts "An existentialist, that's who."
      end
    end

    # String is already the parent class
    class DeepString < String
      # extend adds instance methods from AMixIn as class methods
      extend AMixIn
    end

    DeepString.who_am_i?
     #=> An existentialist, that's who.

    AMixIn.new
     #=> NoMethodError: undefined method ‘new’ for AMixIn:Module


## Can you tell me the three levels of method access control for classes and modules? What do they imply about the method?

All methods, no matter the access control, can be accessed within the class. But what about outside callers?

Public methods enforce no access control -- they can be called in any scope.

Protected methods are only accessible to other objects of the same class.

Private methods are only accessible within the context of the current object.

    class AccessLevel
      def something_interesting
        another = AccessLevel.new
        another.public_method
        another.protected_method
        another.private_method
      end

      def public_method
        puts "Public method. Nice to meet you."
      end

      protected

      def protected_method
        puts "Protected method. Sweet!"
      end

      private 

      def private_method
        puts "Incoming exception!"
      end
    end

    AccessLevel.new.something_interesting
     #=> Public method.  Nice to meet you.
     #=> Protected method.  Sweet!
     #=> NoMethodError: private method ‘private_method’ called for
     #=>  #<AccessLevel:0x898c8>


## There are three ways to invoke a method in ruby. Can you give me at least two?

Here, I'm looking for the dot operator (or period operator), the Object#send method, or method(:foo).call

    object = Object.new
    puts object.object_id
     #=> 282660

    puts object.send(:object_id)
     #=> 282660

    puts object.method(:object_id).call # (Kudos to Ezra)
     #=> 282660


##Separating the professional from the hobbyist

Explain this ruby idiom: a ||= b

A common idiom that strong ruby developers use all the time.

    # a = b when a == false
    # otherwise a remains unchanged
    a || a = b

    a = 1
    b = 2
    a ||= b #=> a = 1

    a = nil
    b = 2
    a ||= b #=> a = 2

    a = false
    b = 2
    a ||= b #=> a = 2


##What does self mean?

self always refers to the current object. But this question is more difficult than it seems because Classes are also objects in ruby.

    class WhatIsSelf
      def test
        puts "At the instance level, self is #{self}"
      end

      def self.test
        puts "At the class level, self is #{self}"
      end
    end

    WhatIsSelf.test 
     #=> At the class level, self is WhatIsSelf
    
    WhatIsSelf.new.test 
     #=> At the instance level, self is #<WhatIsSelf:0x28190>

This short snippet indicates two things:

At the class level, self is the class, in this case WhatIsSelf.
At the instance level, self is the instance in context, in this case the instance of WhatIsSelf at memory location 0x28190.

##What is a Proc?

Everyone usually confuses procs with blocks, but the strongest rubyist can grok the true meaning of the question.

Essentially, Procs are anonymous methods (or nameless functions) containing code. They can be placed inside a variable and passed around like any other object or scalar value. They are created by Proc.new, lambda, and blocks (invoked by the yield keyword).

Note: Procs and lambdas do have subtle, but important, differences in ruby v1.8.6. However, I wouldn't expect a candidate talk about these nitty-gritty details during an interview.

    # wants a proc, a lambda, AND a block
    def three_ways(proc, lambda, &block)
      proc.call
      lambda.call
      yield # like block.call
      puts "#{proc.inspect} #{lambda.inspect} #{block.inspect}"
    end

    anonymous = Proc.new { puts "I'm a Proc for sure." }
    nameless  = lambda { puts "But what about me?" }

    three_ways(anonymous, nameless) do
      puts "I'm a block, but could it be???"
    end
     #=> I'm a Proc for sure.
     #=> But what about me?
     #=> I'm a block, but could it be???
     #=> #<Proc:0x00089d64> #<Proc:0x00089c74> #<Proc:0x00089b34>


##What is unit testing (in classical terms)?
##What is the primary technique when writing a test?

Unit testing, simply put, is testing methods -- the smallest unit in object-oriented programming. Strong candidates will argue that it allows a developer to flesh out their API before it's consumed by other systems in the application.

The primary way to achieve this is to assert that the actual result of the method matches an expected result.

    require "test/unit"

    class Brokened
      def uh_oh
        "I needs fixing"
      end
    end

    class BrokenedTest < Test::Unit::TestCase
      def test_uh_oh
        actual = Brokened.new
        assert_equal("I'm all better!", actual.uh_oh)
      end
    end
     #=> Started
     #=> F
     #=> Finished in 0.663831 seconds.
     #=> 
     #=>   1) Failure:
     #=> test_uh_oh:11
     #=> <"I'm all better!"> expected but was
     #=> <"I needs fixing">.
     #=> 
     #=> 1 tests, 1 assertions, 1 failures, 0 errors


##Show me the money!

Variable typing is one of those topics that everyone sort of understands it, but is hard to put it into words. I've iterated and improved the next series of questions to really test a senior level candidate's knowledge of static and dynamic typing. This is my best attempt so far.

What is the primary difference in these two code snippets?

    // Java
    public boolean isEmpty(String s) {
    return s.length() == 0;
    }

    # ruby
    def empty?(s)
    return s.size == 0
    end

The Java method only accepts Strings as arguments and only returns a boolean while...

The ruby method accepts any Object and could return anything, but in this case will return a boolean if executed without exceptions.

What does this say about the advantages of ruby's dynamic (duck) typed system?

That ruby program use less code and are more flexible.

What are some disadvantages (real and potential)?

Developers cannot be 100% certain that all arguments sent this empty? method will have a size method that is publicly accessible. Also, ruby is an interpreted language and it may take longer to run than compiled programs, such as Java, that are programmed similarly.


##What could a developer do to address these disadvantages?

She could write unit tests or specs to ensure her application behaves as intended. She could also profile her application with tools like the unix time command, the ruby Benchmark class, and the ruby library called ruby-prof.

A cunning programmer would also argue that these two techniques ought to be used for both static and dynamic languages when developing complex systems.


## Wrapping things up

To finish up with, I like to lob in some easy ones again. Plus I like to scratch my own curiosity about a candidates relationship with the ruby community.

What are rubygems? Any favorites not including rails? Any that you've worked on personally?

rubygems is package manager software for ruby libraries (i.e. gems). The package manager has basic CRUD operations, dependency trees, and supports asynchronous communication between multiple gem servers.

What is your favorite api resource for ruby?

I really like gotAPI -- auto-complete searching for both ruby and rails together!